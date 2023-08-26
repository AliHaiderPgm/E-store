import Card from "../../components/shared/Card"
import { Input, Select } from "antd"
import { useProduct } from "../../context/ProductContext"
import { useEffect, useRef } from "react"
const { Search } = Input

const AllProducts = () => {
	const shouldLog = useRef(true)
	const { getProductLoading, GetProducts, products } = useProduct()

	const options = []
	for (let i = 10; i < 36; i++) {
		options.push({
			value: i.toString(36) + i,
			label: i.toString(36) + i,
		})
	}
	const onSearch = () => {}
	const handleChange = (value) => {}

	useEffect(() => {
		if (shouldLog.current) {
			shouldLog.current = false
			GetProducts()
		}
	}, [])
	if (getProductLoading) {
		return <h1>Loading....</h1>
	}
	return (
		<>
			<div className="d-flex justify-content-between mt-2 mb-3">
				<Search
					placeholder="Search Product"
					allowClear
					enterButton="Find"
					size="large"
					onSearch={onSearch}
					className="w-25"
				/>
				<Select
					size="large"
					onChange={handleChange}
					placeholder="Sort Products"
					className="w-25"
					options={options}
				/>
			</div>
			<div className="row">
				{products?.map((item, index) => {
					return (
						<div className="col-3" key={index}>
							<Card data={item} />
						</div>
					)
				})}
			</div>
		</>
	)
}

export default AllProducts
