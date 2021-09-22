let horario = "vespertino"

switch (horario) {
    case 'matutino':
        console.log("Bom Dia!")
        break;
        case 'vespertino':
            console.log("Boa Tarde!")
            break;
            case 'noturno':
                console.log("Boa Noite!")
                break;
            
    default:
        console.log("Valor Inválido!")
        break;
} 