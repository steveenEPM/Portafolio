
const NavItems = ({ children, id }) => {

    return (
        <section id={id}>
            <div data-aos="zoom-in">
                {children}
            </div>
        </section>
    )

}


export default NavItems