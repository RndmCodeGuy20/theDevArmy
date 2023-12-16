#!/usr/bin/env node
// create a CLI for the user to see info about theDevArmy - theDevArmy is a group of developers who are passionate about coding and helping others learn to code.
// The CLI should provide the following information:
// - TheDevArmy's name
// - TheDevArmy's location
// - TheDevArmy's mission statement
// - TheDevArmy's current projects
// - TheDevArmy's current members
// - TheDevArmy's contact information
// - TheDevArmy's social media links
// - exit the CLI



import inquirer from 'inquirer';
import chalk from 'chalk';
import clear from 'clear';
import figlet from 'figlet';
import chalkAnimation from 'chalk-animation';
import {colors, flameColors} from './helpers/constants.js';
import {sleep} from "./helpers/helper.js";
import {guests} from "./data/guests.js";


// clear();

async function welcome() {
    console.log(
        `
    ${chalk.hex(colors[7])("╔══════════════════════════════════════════════════════════════════════════════════════════╗")}
    ${chalk.hex(colors[7])("║")}  ${chalk.hex(colors[2])("████████╗██╗  ██╗███████╗")}${chalk.hex(colors[6])("██████╗ ███████╗██╗   ██╗")}${chalk.hex(colors[5])(" █████╗ ██████╗ ███╗   ███╗██╗   ██╗")}  ${chalk.hex(colors[7])("║")}
    ${chalk.hex(colors[7])("║")}  ${chalk.hex(colors[2])("╚══██╔══╝██║  ██║██╔════╝")}${chalk.hex(colors[6])("██╔══██╗██╔════╝██║   ██║")}${chalk.hex(colors[5])("██╔══██╗██╔══██╗████╗ ████║╚██╗ ██╔╝")}  ${chalk.hex(colors[7])("║")}
    ${chalk.hex(colors[7])("║")}  ${chalk.hex(colors[2])("   ██║   ███████║█████╗  ")}${chalk.hex(colors[6])("██║  ██║█████╗  ██║   ██║")}${chalk.hex(colors[5])("███████║██████╔╝██╔████╔██║ ╚████╔╝")}   ${chalk.hex(colors[7])("║")}
    ${chalk.hex(colors[7])("║")}  ${chalk.hex(colors[2])("   ██║   ██╔══██║██╔══╝  ")}${chalk.hex(colors[6])("██║  ██║██╔══╝  ╚██╗ ██╔╝")}${chalk.hex(colors[5])("██╔══██║██╔══██╗██║╚██╔╝██║  ╚██╔╝")}    ${chalk.hex(colors[7])("║")}
    ${chalk.hex(colors[7])("║")}  ${chalk.hex(colors[2])("   ██║   ██║  ██║███████╗")}${chalk.hex(colors[6])("██████╔╝███████╗ ╚████╔╝ ")}${chalk.hex(colors[5])("██║  ██║██║  ██║██║ ╚═╝ ██║   ██║  ")}   ${chalk.hex(colors[7])("║")}
    ${chalk.hex(colors[7])("║")}  ${chalk.hex(colors[2])("   ╚═╝   ╚═╝  ╚═╝╚══════╝")}${chalk.hex(colors[6])("╚═════╝ ╚══════╝  ╚═══╝  ")}${chalk.hex(colors[5])("╚═╝  ╚═╝╚═╝  ╚═╝╚═╝     ╚═╝   ╚═╝  ")}   ${chalk.hex(colors[7])("║")}
    ${chalk.hex(colors[7])("╚══════════════════════════════════════════════════════════════════════════════════════════╝")}
    `
    );

    console.log(
        `
         ${chalk.hex(flameColors[4])(")")}                           ╔═══════════════════════════════════════════════════════════╗
          ${chalk.hex(flameColors[4])("(")}                          ║  Welcome to ${chalk.hex(colors[3])("theDevArmy")}, where coding meets community!     ║
        ${chalk.hex(flameColors[3])("'    }")}                       ║  Explore the vast world of development, collaboration,    ║
      ${chalk.hex(flameColors[3])("(    '  ")}                       ║  and innovation with our vibrant community of techies!    ║
     ${chalk.hex(flameColors[3])("'      (")}                        ║  While you're here, don't forget to add your name to the  ║
      ${chalk.hex(flameColors[2])(")")}  ${chalk.hex(colors[7])("|")}    ${chalk.hex(flameColors[2])(")")}                      ║  guestbook! We're glad you're here!                       ║
    ${chalk.hex(flameColors[2])("'")}   ${chalk.hex(colors[7])("/|\\")}    ${chalk.hex(flameColors[3])("\`")}                     ╚═══════════════════════════════════════════════════════════╝
   ${chalk.hex(flameColors[3])(")")}   ${chalk.hex(colors[7])("/ | \\")}  ${chalk.hex(flameColors[2])("\` )")}                    
   ${chalk.hex(flameColors[2])("{")}   ${chalk.hex(colors[7])("| | |")}   ${chalk.hex(flameColors[2])("{")}                     
  ${chalk.hex(flameColors[3])("}")}    ${chalk.hex(colors[7])("| | |")}   ${chalk.hex(flameColors[2])(".")}                     
   ${chalk.hex(flameColors[3])("'")}   ${chalk.hex(colors[7])("| | |")}     ${chalk.hex(flameColors[3])(")")}                   
  ${chalk.hex(flameColors[3])("(")}   ${chalk.hex(colors[1])("/")}${chalk.hex(colors[7])("| | |")}${chalk.hex(colors[1])("\\")}     ${chalk.hex(flameColors[3])(".")}
   ${chalk.hex(flameColors[1])(".")} ${chalk.hex(colors[1])("/")} ${chalk.hex(colors[7])("| | |")} ${chalk.hex(colors[1])("\\")}   ${chalk.hex(flameColors[2])("(")}
 ${chalk.hex(flameColors[2])("}")}   ${chalk.hex(colors[1])("\\ \\ | / /")}   ${chalk.hex(flameColors[4])(".")}
  ${chalk.hex(flameColors[1])("(")}   ${chalk.hex(colors[1])("\\ \`-' /")}     ${chalk.hex(flameColors[1])("}")}
 ${chalk.hex(flameColors[3])("'")}    ${chalk.hex(colors[1])("/ ,-. \\")}     ${chalk.hex(flameColors[3])("'")}
  ${chalk.hex(flameColors[2])("}")}  ${chalk.hex(colors[1])("/ / | \\ \\")}   ${chalk.hex(flameColors[3])("}")}
 ${chalk.hex(flameColors[1])("'")}   ${chalk.hex(colors[1])("\\")} ${chalk.hex(colors[7])("| | |")} ${chalk.hex(colors[1])("/")}    ${chalk.hex(flameColors[2])("'")}
  ${chalk.hex(flameColors[2])("(")}   ${chalk.hex(colors[1])("\\")}${chalk.hex(colors[7])("| | |")}${chalk.hex(colors[1])("/")}   ${chalk.hex(flameColors[1])("(")}
    ${chalk.hex(flameColors[1])(")")}  ${chalk.hex(colors[7])("| | |")}   ${chalk.hex(flameColors[0])(")")}
    ${chalk.hex(flameColors[0])(".")}  ${chalk.hex(colors[7])("| | |")}   ${chalk.hex(flameColors[2])("{")}
       ${chalk.hex(colors[7])("J | L")}
 ${chalk.hex(colors[4])("/|")}    ${chalk.hex(colors[7])("J | L")}    ${chalk.hex(colors[4])("|\\")}
 ${chalk.hex(colors[1])("\\ \\___/ o \\___/ /")}
  ${chalk.hex(colors[1])("\\_____ _ _____/")}
        ${chalk.hex(colors[1])("|-|")}
        ${chalk.hex(colors[1])("|-|")}
        ${chalk.hex(colors[1])("|-|")}
       ${chalk.hex(colors[3])(",'-'.")}
       ${chalk.hex(colors[3])("'---'")}
    `
    );
}

async function guestBook() {
    console.log(
        chalk.hex(colors[3])(`
             ____   ____   ____   ____   ____   ____
            |____| |____| |____| |____| |____| |____| 
             ____   ___ <> Guest Book </> ___   ____  
            |____| |____| |____| |____| |____| |____| `));

    for (let i = 0; i < guests.length; i++) {
        console.log(`
    ${chalk.hex(colors[7])("╔═══════════════════════════════════════════════════════════╗")}
            ${chalk.hex(colors[4])(`DEV :`)} ${guests[i].name}
            ${chalk.hex(colors[4])(`GITHUB :`)} ${guests[i].github}
    ${chalk.hex(colors[7])("╚═══════════════════════════════════════════════════════════╝")}`)
        await sleep(1000);
    }
}

clear();

await welcome();
await sleep(1000);
await guestBook();
