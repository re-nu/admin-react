

export function ColorCode() {
    const colors = [
        { name: "primary", color: "#4e73df" },
        { name: "Success", color: "#1cc88a" },
        { name: "Info", color: "#36b9cc" },
        { name: "Warning", color: "#f6c23e" },
        { name: "Danger", color: "#e74a3b" },
        { name: "Secondary", color: " #858796" }
    ];
    return (
        <div className="colors">
            {colors.map(({ name, color }) => (
                <Color name={name} color={color} />
            ))}
        </div>
    );
}

function Color({name,color}) {
    const styl={backgroundColor:color};
    console.log(styl)
    return(
        <div className="color" style={styl}>
            <p>{name} <br/>
            {color}</p>
        </div>
    )
}
