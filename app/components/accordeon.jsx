'use client'


export default function Accordeon({ data }) {
    const list = data.map((obj) => (
        <li key={obj.title} className="collapse collapse-arrow border border-[#3a3a3a] rounded my-3">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
                {obj.title}
            </div>
            <div className="collapse-content">
                <p>{obj.text}</p>
            </div>
        </li>
    ))
    return <div>{list}</div>
}
