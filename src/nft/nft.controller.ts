import { Body, Controller, Injectable, Post } from '@nestjs/common';
import { ApiProperty, ApiTags } from '@nestjs/swagger';
import { CONFIG } from 'config';
import { Contract, JsonRpcProvider, Provider, Wallet } from 'ethers';
import { OraABI } from './ora';

export class OraRequest {
  @ApiProperty({})
  prompt: string;
}

@ApiTags('maci')
@Controller('maci')
export class NftController {
  provider: Provider;
  wallet: Wallet;
  constructor() {
    this.provider = new JsonRpcProvider(
      `https://sepolia.infura.io/v3/${CONFIG.INFURA_API}`,
    );
    this.wallet = new Wallet(CONFIG.SEPOLIA_PK, this.provider);
  }
  @Post('ora')
  async ora(@Body() oraRequest: OraRequest) {
    // TODO: call ora contract
    const contract = new Contract(
      '0x64BF816c3b90861a489A8eDf3FEA277cE1Fa0E82',
      OraABI,
      this.wallet,
    );

    const tx = await contract[
      'calculateAIResult(uint256 modelId,string prompt)'
    ](50, oraRequest.prompt);

    return {
      prompt: oraRequest.prompt,
      txHash: tx.hash,
    };
  }
}
