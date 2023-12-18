function Form() {
    const degree = 1;

    const setDegree = () => {
        const num = prompt("What degree?")
        degree = num;
    }
    //Create a form that adds as many xs and ys as the user wants
    
    //put both x and y into seperate arrays
    
    const x = 1;
    const y = 1;
    const add = () => {
        x=x++;
        y=y++;
    }
    
    return(
        <>
        {setDegree}
        <form>
            {}
        </form>
        </>
    )
}

export default Form;