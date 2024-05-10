
const Date = (props: { title: string }) => {
    return <div>
        <label className="block text-gray-900 text-left" >{props.title}</label>
        <input type="date" placeholder="{props.title}"  />
        
    </div>
}

export default Date;