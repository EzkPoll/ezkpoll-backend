import { BadRequestException, Body, Controller, Injectable, Post } from '@nestjs/common';
import { ApiProperty, ApiTags } from '@nestjs/swagger';
import { CONFIG } from 'config';
import { Contract, JsonRpcProvider, parseEther, Provider, Wallet } from 'ethers';
import { OraABI } from './ora';

export class OraRequest {
  @ApiProperty({})
  prompt: string;
}

@ApiTags('ora')
@Controller('ora')
export class NftController {
  provider: Provider;
  wallet: Wallet;
  constructor() {
    this.provider = new JsonRpcProvider(
      `https://sepolia.infura.io/v3/${CONFIG.INFURA_API}`,
    );
    this.wallet = new Wallet(CONFIG.SEPOLIA_PK, this.provider);
  }
  isProcessing = false;
  @Post('ora')
  async ora(@Body() oraRequest: OraRequest) {
    try {
      const contract = new Contract(
        '0x64BF816c3b90861a489A8eDf3FEA277cE1Fa0E82',
        OraABI,
        this.wallet,
      );

      const tx = await contract[
        'calculateAIResult(uint256 modelId,string prompt)'
      ](50, oraRequest.prompt, {
        value: parseEther('0.018'),
      });
      const receipt = await tx.wait();

      return {
        prompt: oraRequest.prompt,
        txHash: tx.hash,
        receipt,
      };
    } catch (error: any) {
      console.error(error);
      throw new BadRequestException(error.message);
    }
  }
}
