
const Select = (props: { title: string }) => {
    return <div>
        <label className="block text-gray-900 text-left">{props.title}</label>
        <select
            name="HeadlineAct"
            id="HeadlineAct"
            className="mt-1.5 w-full text-gray-700"
        >
            <option value="">Chọn</option>
            <option value="HN">Hà Nội</option>
            <option value="NA">Nghệ An</option>
            <option value="HP">Hải Phòng</option>
            <option value="BN">Bắc Ninh</option>
            <option value="QN">Quảng Ninh</option>
            <option value="YB">Yên Bái</option>
            <option value="HL">Hạ Long</option>
        </select>
    </div>
}

export default Select;