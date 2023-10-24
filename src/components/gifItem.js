export const GifItem = ({ url, title = '', category }) => {
    if(title === ' '){
        title = category;
    }
    return (
        <div className="item col-4">
            <div className="img">
                {/* <img src='https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExMWE0Mm8xcTBwYTF1d2RjdXpzdmNqbDdocnBoMWh2dW9yaHQ1ZW0zNSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/11TkuRl1Ff32ak/giphy.gif' alt={title} /> */}
                <img src={url} alt={title} />
            </div>
            <label className="title">
                {title}
            </label>
        </div>
    )
}