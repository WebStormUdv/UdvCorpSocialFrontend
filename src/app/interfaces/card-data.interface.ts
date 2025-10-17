import { FormControl } from "@angular/forms";

export interface ICardData {
    text: [string, any?];
    image: [File | null];
}