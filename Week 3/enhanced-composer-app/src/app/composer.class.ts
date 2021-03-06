import { IComposer } from './composer.interface';

export class Composer{
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
