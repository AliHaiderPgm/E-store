import { Carousel, Skeleton } from "antd"
import {
	KeyboardArrowLeftOutlined,
	KeyboardArrowRightOutlined,
	StarRate,
} from "@mui/icons-material"
import React, { useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import Loader from "./Loader"
const BnbCard = React.forwardRef((props, ref) => {
	const { data } = props
	const [imageLoaded, setImageLoaded] = useState(false)
	const carousel = useRef()
	const navigate = useNavigate()
	const handleNavigate = () => {
		navigate(`/${data?.shoefor}/${data._id}`)
	}

	useEffect(() => {
		const img = new Image()
		img.onload = () => {
			setImageLoaded(true)
		}
		img.src = data?.images[0]
	}, [data?.images])
	return (
		<div className="card-content-wrapper" ref={ref}>
			{
				!imageLoaded && <div style={{ height: "300px", width: "100%", backgroundColor: "rgba(0,0,0,0.1)" }} ><Loader /></div>
				// !imageLoaded && <Skeleton.Image style={{ height: "300px", width: "100%" }} active />
			}
			{
				imageLoaded && <div className="carousel d-flex flex-column justify-content-center">
					{
						data?.images.length === 1 ? null : <div className="card-controller">
							<KeyboardArrowLeftOutlined
								className="icon"
								onClick={() => {
									carousel.current.prev()
								}}
							/>
							<KeyboardArrowRightOutlined
								className="icon"
								onClick={() => {
									carousel.current.next()
								}}
							/>
						</div>
					}
					<Carousel ref={carousel} >
						{
							data?.images.map((imageUrl, index) => {
								return <div key={index} onClick={() => handleNavigate()}>
									<img src={imageUrl} className="img-fluid" loading="lazy" />
								</div>
							})
						}
					</Carousel>
				</div>
			}
			<div className="content" onClick={() => handleNavigate()}>
				<div>
					<h1>{data?.name}</h1>
					<div>
						<StarRate className="icon" />
						<p>{data?.rating}</p>
					</div>
				</div>
				<p>{data?.type}</p>
				<p>
					Rs<span>{data?.price}</span>
				</p>
			</div>
		</div>
	)
})

export default BnbCard
