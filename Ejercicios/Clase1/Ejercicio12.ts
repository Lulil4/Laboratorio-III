function zodiac(born: string): void {

    var day: number = parseInt(born.split('/')[0]);
    var month: string = born.split('/')[1];

    var signo: string = "ninguno";

    switch (month) {
        case "1":
            if (day < 20) {
                signo = "capricornio";
            }
            else {
                signo = "acuario";
            }
            break;
        case "2":
            if (day < 19) {
                signo = "acuario";
            }
            else {
                signo = "piscis";
            }
            break;
        case "3":
            if (day < 21) {
                signo = "piscis";
            }
            else {
                signo = "aries";
            }
            break;
        case "4":
            if (day < 20) {
                signo = "aries";
            }
            else {
                signo = "tauro";
            }
            break;
        case "5":
            if (day < 21) {
                signo = "tauro";
            }
            else {
                signo = "geminis";
            }
            break;
        case "6":
            if (day <= 21) {
                signo = "geminis";
            }
            else {
                signo = "cancer";
            }
            break;
        case "7":
            if (day <= 23) {
                signo = "cancer";
            }
            else {
                signo = "leo";
            }
            break;
        case "8":
            if (day <= 23) {
                signo = "leo";
            }
            else {
                signo = "virgo";
            }
            break;
        case "9":
            if (day <= 23) {
                signo = "virgo";
            }
            else {
                signo = "libra";
            }
            break;
        case "10":
            if (day <= 23) {
                signo = "libra";
            }
            else {
                signo = "escorpio";
            }
            break;
        case "11":
            if (day <= 22) {
                signo = "escorpio";
            }
            else {
                signo = "sagitario";
            }
            break;
            case "12":
                if (day <= 22) {
                    signo = "sagitario";
                }
                else {
                    signo = "capricornio";
                }
                break;
        default:
            break;
    }
    console.log(signo);

}

zodiac("01/12/1998");