/**
 * Title: composer.service.ts
 * Author: Professor Krasso
 * Modified by: Eunice Lim
 * Date: 30 June 2021
 * Description: Service class for Composer objects
 */


import { Injectable } from '@angular/core';
import { IComposer } from './composer.interface';

@Injectable({
  providedIn: 'root'
})
export class ComposerService {

  composers: Array<IComposer>;

  constructor(){
    this.composers= [
      { composerId: 100, fullName: "Franz Liszt", genre: "Classical"},
      { composerId: 101, fullName: "Ludwig van Beethoven", genre: "Classical"},
      { composerId: 102, fullName: "Johann Sebastian Bach ", genre: "Classical"},
      { composerId: 103, fullName: "Sergei Rachmaninoff", genre: "Classical"},
      { composerId: 104, fullName: "Pyotr Ilyich Tchaikovsky", genre: "Classical"},
      ]
   }
   getComposers(){
     return this.composers;
   }
   getComposer(composerId: number){
     for (let composer of this.composers){
       if (composer.composerId === composerId){
         return composer;
       }
     }
      return {} as IComposer;
   }
      }
