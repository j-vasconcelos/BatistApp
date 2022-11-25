import { DatePipe } from "@angular/common";

export interface Devocional{
    id?: number
    devotionalTitle: String;
    textVersicle: String;
    devotionalText: String;
    prayerText: String;
    postDate: string;
    imgURL: String;
}