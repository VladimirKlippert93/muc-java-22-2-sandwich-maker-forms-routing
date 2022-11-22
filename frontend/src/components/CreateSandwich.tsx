import {ChangeEvent, FormEvent, useState} from "react";
import {Sandwich} from "../model/Sandwich";

type CreateSandwichProps = {
    addSandwich: (description: Sandwich) => void
}

export default function CreateSandwich(props: CreateSandwichProps) {

    const emptySandwichPlaceholder: Sandwich = {
        id: "",
        name: "",
        patty: "",
        numberOfPatties: 0,
        grilled: false,
        extraWishes: ""
    }

    const [sandwich, setSandwich] = useState(emptySandwichPlaceholder)


    /*
    * TODO: Aufgabe 3 -> Erstelle eine handleSubmit(event: FormEvent<HTMLFormElement>) Funktion,
    *  die props.addSandwich aufruft und das neue Sandwich-Objekt als Parameter übergibt
    **/

    /*
    * TODO: Aufgabe 2 -> Erstelle eine handleChange(event: ChangeEvent<HTMLInputElement>) Funktion,
    *  die Änderungen an der Form übernimmt und den Sandwich-State aktualisiert
    **/


    /*
    * TODO: Aufgabe 1 -> Erstelle eine <form> mit der man alle Daten eines Burgers angeben kann
    **/
    function handleOnChange(event: ChangeEvent<HTMLInputElement>){
        const fieldName = event.target.name
        const fieldType = event.target.type
        const fieldValue = fieldType !== "checkbox" ? event.target.value: event.target.checked

        setSandwich(prevState => ({
            ...prevState, [fieldName]: fieldValue

        }))
    }
    function handleSubmit(event: FormEvent<HTMLFormElement>){
        event.preventDefault();
        alert(sandwich)
    }


    return (
        <div>
            {/* TODO: onClick hier entfernen und props.addSandwich in handleSubmit verschieben */}
            <form onSubmit={handleSubmit}>
                <label>
                    Bullete:
                    <input
                        type={"string"}
                        name={"patty"}
                        value={sandwich.patty}
                        onChange={handleOnChange}
                    />
                </label>
                <br/>
                <label>
                    Anzahl von Bulleten:
                    <input
                        type={"number"}
                        name={"numberOfPatties"}
                        value={sandwich.numberOfPatties}
                        onChange={handleOnChange}
                    />
                </label>
                <br/>
                <label>
                    Brot gegrillt:
                    <input
                        type={"checkbox"}
                        name={"grilled"}
                        checked={sandwich.grilled}
                        onChange={handleOnChange}
                    />
                </label>
                <br/>
                <label>
                    Extrawünsche:
                    <input
                        type={"string"}
                        name={"extraWishes"}
                        value={sandwich.extraWishes}
                        onChange={handleOnChange}
                    />
                </label>
                <br/>
                <button onClick={() => props.addSandwich(sandwich)}>Bestellung hinzufügen</button>
            </form>
        </div>
    )

    /* TODO: Bonusaufgabe 1 -> Füge dem Projekt Routing hinzu (click auf ein Sandwich, öffnet die Sandwich-Details wie bei Rick&Morty)  */
    /* TODO: Bonusaufgabe 2 -> Style das Projekt nach deinen Wünschen  */
    /* TODO: Bonusaufgabe 3 -> Gib dem Sandwich-Objekt mehr Attribute (im Frontend + Backend)  */
}