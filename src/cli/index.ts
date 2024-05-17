#!/usr/bin/env ts-node
import { Command } from 'commander';
import ConfigureHelp from './help';
import SendCommand from './cmd.send';
import DraftCommand from './cmd.draft';
import SetupCommand from './cmd.setup';

const program = new Command();

program
    .name('mailmerge')
    .version('1.0.0')
    .description('A simple CLI for mail merge.')
    .action(() => {
        program.help();
    })
    .addHelpCommand(false)
    .enablePositionalOptions()
    .passThroughOptions();

// ------------- Add things that mutate the program ----------
ConfigureHelp(program);
SendCommand(program);
DraftCommand(program);
SetupCommand(program);

// ------------- Execute the program ----------
program.parse(process.argv);
