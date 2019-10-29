import Carddata from "./Carddata";

class StringCarddata extends Carddata {
    payload: string = "Default";

    constructor(content?: string, cardtitle?: string) {
        super(cardtitle);
        
        if(content != null) {
            this.payload = content;
        }
        else {
            this.payload = "Default";
        }
    }
}
export default StringCarddata;