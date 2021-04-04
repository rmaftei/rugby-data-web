import { Component, OnInit } from '@angular/core';

import { Round } from '../model/round'

import { CecbankService } from '../championships/cecbank.service'

@Component({
  selector: 'app-cecbank',
  templateUrl: './cecbank.component.html',
  styleUrls: ['./cecbank.component.scss'],
})
export class CecbankComponent implements OnInit {

  rounds: Round[] = [];

  constructor(private cecBankService: CecbankService) {
  }

  loadRounds(): void {
    this.rounds = this.cecBankService.getRounds().reverse();
  }

  ngOnInit() {
    this.loadRounds();
  }

}
