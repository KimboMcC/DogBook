

const Register = () => {

    return (
        <div>
            <h1>Welcome to PETBOOk!</h1>
            <p>The internets best and cutest pet social-media app.</p>
            <p>Share, save and scroll through pet photos. Cute!</p>

            <h2>Choose a nickname:</h2>

            <form>
                <label for="userName">First name & LastNAme MAKE DIFFERENT INPUTS. HAS TO BE FIRST & LAST TO FIT IN WITH API DATA<i className="italic">No special characters!</i></label>
                <input type='text' id="userName" name="userName"/>
                <input type="radio" name="pp_option" id="pp1"/>
                <input type="radio" name="pp_option" id="pp2"/>
                <input type="radio" name="pp_option" id="pp3"/>

            </form>

        </div>
    )
}

export default Register;