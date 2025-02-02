import * as React from "react";
import { Form } from "radix-ui";
import { addHostChatroomData } from "../(hosts)/testdata";

const ChatlistForm = () => {
	const [formData, setFormData] = React.useState({
		startDate: "",
		endDate: "",
		roomName: "",
		password: "",
	});

	const handleSubmit = (event) => {
		event.preventDefault(); // 기본 제출 방지

		// 외부로 전달 (예: 콘솔 출력 또는 API 요청)
		console.log("Form Data:", formData);
		addHostChatroomData(formData);

	};

	return (
		<Form.Root className="w-[260px]" onSubmit={handleSubmit}>
			<Form.Field className="mb-2.5 grid" name="startDate">
				<div className="flex items-baseline justify-between">
					<Form.Label className="text-[15px] font-medium leading-[35px]">
						Start date
					</Form.Label>
					<Form.Message className="text-[13px] opacity-80 text-red-500" match="valueMissing">
						Please enter start date
					</Form.Message>
				</div>
				<Form.Control asChild>
					<input
						className="box-border inline-flex h-[35px] w-full appearance-none rounded bg-blackA2 px-2.5 text-[15px] shadow-blackA6 outline-none selection:bg-blackA6"
						type="date"
						required
						value={formData.startDate}
						onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
					/>
				</Form.Control>
			</Form.Field>

			<Form.Field className="mb-2.5 grid" name="endDate">
				<div className="flex items-baseline justify-between">
					<Form.Label className="text-[15px] font-medium leading-[35px]">
						End date
					</Form.Label>
					<Form.Message className="text-[13px] opacity-80 text-red-500" match="valueMissing">
						Please enter end date
					</Form.Message>
				</div>
				<Form.Control asChild>
					<input
						className="box-border inline-flex h-[35px] w-full appearance-none rounded bg-blackA2 px-2.5 text-[15px] shadow-blackA6 outline-none selection:bg-blackA6"
						type="date"
						required
						value={formData.endDate}
						onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
					/>
				</Form.Control>
			</Form.Field>

			<Form.Field className="mb-2.5 grid" name="roomName">
				<div className="flex items-baseline justify-between">
					<Form.Label className="text-[15px] font-medium leading-[35px]">
						Chatroom name
					</Form.Label>
					<Form.Message className="text-[13px] opacity-80 text-red-500" match="valueMissing">
						Please enter a name
					</Form.Message>
				</div>
				<Form.Control asChild>
					<input
						className="box-border inline-flex w-full appearance-none rounded bg-blackA2 p-2.5 text-[15px] shadow-blackA6 outline-none selection:bg-blackA6"
						type="text"
						required
						value={formData.name}
						onChange={(e) => setFormData({ ...formData, roomName: e.target.value })}
					/>
				</Form.Control>
			</Form.Field>

			<Form.Field className="mb-2.5 grid" name="password">
				<div className="flex items-baseline justify-between">
					<Form.Label className="text-[15px] font-medium leading-[35px]">
						Chatroom password
					</Form.Label>
					<Form.Message className="text-[13px] opacity-80 text-red-500" match="valueMissing">
						Please enter a password
					</Form.Message>
				</div>
				<Form.Control asChild>
					<input
						className="box-border inline-flex w-full appearance-none rounded bg-blackA2 p-2.5 text-[15px] shadow-blackA6 outline-none selection:bg-blackA6"
						type="password"
						required
						value={formData.password}
						onChange={(e) => setFormData({ ...formData, password: e.target.value })}
					/>
				</Form.Control>
			</Form.Field>

			<Form.Submit asChild>
				<button className="mt-2.5 box-border inline-flex h-[35px] w-full items-center justify-center rounded bg-white px-[15px] font-medium leading-none text-violet11 shadow-blackA4 hover:bg-mauve3 focus:shadow-[0_0_0_2px] focus:shadow-black">
					Create new chatroom
				</button>
			</Form.Submit>
		</Form.Root>
	);
};

export default ChatlistForm;
