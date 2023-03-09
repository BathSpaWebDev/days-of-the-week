import Button from "../buttons/main-button";

function Monday(){
    return (
        <>
            <h1>Today is Monday</h1>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem dolore veritatis maxime dignissimos quis! Deleniti tenetur numquam explicabo ducimus! Laborum perferendis corporis deleniti fuga amet repellendus quibusdam aut asperiores impedit?
            </p>
            <Button 
                buttonText="Click this"
                borderWidth="4px"
                borderColor="darkblue"
                backgroundColor="green"
                textColor="darkblue"
                borderRoundness={true}
            />

            <Button 
                buttonText="CLICK ME"
                borderWidth="6px"
                borderColor="pink"
                backgroundColor="red"
                textColor="pink"
                borderRoundness={false}
            />

<Button 
                buttonText="Call to ACTION!"
                borderWidth="6px"
                borderColor="black"
                backgroundColor="yellow"
                textColor="black"
                borderRoundness={true}
            />

        </>
    )
}
export default Monday;