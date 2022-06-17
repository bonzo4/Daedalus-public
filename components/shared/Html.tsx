interface IHtml {
    html: string
}

const Html:React.FC<IHtml> = ({html}) => {
    return (
        <div dangerouslySetInnerHTML={{ __html: html}}>
        </div>
    )
}

export default Html;

