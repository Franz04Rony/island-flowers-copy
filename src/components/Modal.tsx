import { useStore } from "@nanostores/react"
import { $activeModal } from "../store/layout"

const messages = {
	letter: {
		title: "🌻Angela🌻",
		text: "Siento que cada conversación contigo es como deshojar una margarita, cada pétalo revela una capa nueva de ti. ¿Qué pasará si termino de deshojar los pétalos? 🤔 ¡Pues descubrámoslo juntos!",
		height: 400,
	},
	bridge: {
		title: "🌻Angela🌻",
		text: "Sigue por el puente, ya estás cerca",
		height: 260,
	},
} as const

export const Modal = () => {
	const activeModal = useStore($activeModal)
	const message = activeModal ? messages[activeModal] : messages.letter

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
					opacity: `${activeModal ? 1 : 0}`,
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
						height: message.height,
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
							height: message.height,
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
							$activeModal.set(null)
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
					<h2
						style={{
							fontFamily: '"Sofadi One", system-ui',
							fontSize: 42,
							fontWeight: 400,
							textAlign: "center",
							letterSpacing: "0.12em",
							color: "#8a5a12",
							textShadow:
								"0 1px 0 #fff6d6, 0 2px 8px rgba(180, 120, 20, 0.35)",
							margin: "4px 0 0",
						}}
					>
						{message.title}
					</h2>
					<div
						style={{
							width: 160,
							height: 3,
							margin: "8px auto 14px",
							borderRadius: 999,
							background:
								"linear-gradient(90deg, transparent, #e4b23a 20%, #f6de7a 50%, #e4b23a 80%, transparent)",
							boxShadow: "0 0 10px rgba(228, 178, 58, 0.55)",
						}}
					/>
					<p
						style={{
							fontFamily: '"Sofadi One", system-ui',
							fontSize: 32,
							textAlign: "center",
							color: "#2c0d0d",
							marginTop: 0,
						}}
					>
						{message.text}
					</p>
				</div>
			</div>
		</>
	)
}
