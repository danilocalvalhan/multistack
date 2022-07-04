import { DogInformation, DogPicture, DogsDescription, DogsName, List, ListElement } from "./list.style";
import { Button } from "@mui/material";
import { Pets } from "../../../data/@types/pets";
import { TextService } from "../../../data/services/textService";

interface ListGeneratorProps {
    pet: Pets[];
    onSelection: (bichinho: Pets) => void;
}

export default function ListGenerator(props: ListGeneratorProps) {
    const maxSizeText = 200;
    return (
        <List>
            {props.pet.map(dog => (
                <ListElement key={dog.id}>
                    <DogPicture src={dog.image} alt='Foto do cachorro' />
                    <DogInformation>
                        <DogsName>{dog.name}</DogsName>
                        <DogsDescription>{TextService.textLimiter(dog.textHistory, maxSizeText)}</DogsDescription>
                        <Button 
                        variant={'contained'} 
                        fullWidth
                        onClick={() => props.onSelection(dog)}
                        >Adotar {dog.name}</Button>
                    </DogInformation>
                </ListElement>
            ))}            
        </List>
    );
}