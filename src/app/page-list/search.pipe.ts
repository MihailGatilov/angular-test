import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'searchName'
})
export class SearchPipe  implements PipeTransform {
    // transform (cards: Cards[], search = ''): Cards[] {
    //     if (!search.trim()){
    //         return cards
    //     }
    //     return cards.filter( card => {
    //         return card.title.toLowerCase().includes(search.toLowerCase())
    //     })
    // }
    transform
}