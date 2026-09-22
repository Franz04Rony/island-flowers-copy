import { useStore } from "@nanostores/react"
import { $activeModal, type ModalKind } from "../store/layout"

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

const MessageCard = ({
	kind,
	visible,
}: {
	kind: ModalKind
	visible: boolean
}) => {
	const message = messages[kind]

	return (
		<div
			style={{
				position: "absolute",
				top: 39,
				left: 39,
				width: 1016,
				height: 568,
				background: "#00000065",
				opacity: visible ? 1 : 0,
				pointerEvents: "none",
				transition: "opacity 0.3s ease-in-out",
			}}
		>
			<div
				style={{
					position: "absolute",
					top: "50%",
					left: "50%",
					transform: "translate(-50%, -50%)",
					width: 600,
					height: message.height,
					borderRadius: "15px",
					boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
					padding: "28px",
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
	)
}

export const Modal = () => {
	const activeModal = useStore($activeModal)

	return (
		<>
			<MessageCard kind="letter" visible={activeModal === "letter"} />
			<MessageCard kind="bridge" visible={activeModal === "bridge"} />
		</>
	)
}
