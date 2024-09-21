import { useStore } from "@nanostores/react"
import { $isModalOpen } from "../store/layout"

export const Modal = () => {
	const isModalOpen = useStore($isModalOpen)

	console.log(isModalOpen)
	return (
		<>
			<div
				style={{
					position: "absolute",
					top: 39,
					left: 39, // Para centrar horizontal y verticalmente
					width: 1016,
					height: 568,
					background: "#00000065", // Fondo blanco
					opacity: `${isModalOpen ? 1 : 0}`,
					pointerEvents: "none",
					transition: "opacity 0.3s ease-in-out",
				}}
			>
				<div
					style={{
						position: "absolute",
						top: "50%",
						left: "50%",
						transform: "translate(-50%, -50%)", // Para centrar horizontal y verticalmente
						width: 600,
						height: 340,
						borderRadius: "15px", // Bordes redondeados
						boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Sombra para dar un efecto de elevación
						padding: "28px", // Espaciado interno
						overflow: "hidden",
						background: "white",
					}}
				>
					<div
						style={{
							position: "absolute",
							top: 0,
							left: 0,
							width: 600,
							height: 340,
							backgroundImage: "url('/sunflowers.jpg')",
							backgroundSize: "cover",
							opacity: 0.4,
							zIndex: -1,
						}}
					></div>
					{/* <div
						style={{
							position: "absolute",
							top: "10px",
							right: "10px",
							width: "36px",
							height: "36px",
							background: "#a7acab", // Color de fondo del botón
							borderRadius: "50%", // Círculo
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							cursor: "pointer",
							boxShadow: "0 2px 5px rgba(0, 0, 0, 0.3)", // Sombra para efecto de elevación
						}}
						onClick={() => {
							$isModalOpen.set(false)
						}}
					>
						<span
							style={{
								color: "white", // Color de la "X"
								fontSize: "20px",
								fontWeight: "bold",
								marginBottom: 2,
								// transform: "rotate(45deg)", // Girar la "X"
							}}
						>
							&#10005;
						</span>
					</div> */}
					<p
						style={{
							fontFamily: '"Sofadi One", system-ui',
							fontSize: 36,
							textAlign: "center",
							color: "#2c0d0d",
							marginTop: 20,
						}}
					>
						Eres como una flor en primavera: traes color y alegría a mi vida,
						recordándome que siempre hay esperanza y belleza en el mundo
					</p>
				</div>
			</div>
		</>
	)
}
