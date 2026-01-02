import FlagIND from "@/assets/img/flag-india.png"
import FlagDNK from "@/assets/img/flag-denmark.png"
import FlagJPN from "@/assets/img/flag-japan.png"
import FlagPOL from "@/assets/img/flag-poland.png"
import FlagGER from "@/assets/img/flag-germany.png"
import FlagUSA from "@/assets/img/flag-usa.png"

// Flags citation: Icon made by Pixel perfect from www.flaticon.com

const getImageURL = (img) => {
    switch  (img) {
        case "flag-india":
            return FlagIND;
        case "flag-denmark":
            return FlagDNK;
        case "flag-japan":
            return FlagJPN;
        case "flag-poland":
            return FlagPOL;
        case "flag-germany":
            return FlagGER;
        case "flag-usa":
            return FlagUSA;
        default:
            return null
    }
}

export default getImageURL;