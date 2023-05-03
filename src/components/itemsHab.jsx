const Items = ({ label }) => {

    return (
        <div style={{
            display: "flex",
            flexDirection: "row",
            gap:12
        }}>
            <i className="fa-sharp fa-solid fa-circle-check" style={{ color: "#ff2323",transform:"translateY(4px)"}} />
            <span>
                {label}
            </span>
        </div>
    )

}

export default Items