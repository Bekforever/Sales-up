const Bot = () => {
	return (
		<div className='flex-1 flex flex-col bg-white rounded-md shadow-md min-h-[200px] p-5'>
			<table className='flex flex-col gap-y-5 py-3'>
				<thead className='border-b-[1px] border-[#adadad] text-2xl'>
					<tr>
						<th className='font-normal'>Бот</th>
					</tr>
				</thead>
				<tbody>
					<tr className='flex justify-start items-start mb-5'>
						<td className='flex-1'>BOT</td>
						<td className='flex-1 text-right'>
							https://t.me/first_school_nukus_bot
						</td>
					</tr>
					<tr className='flex justify-start items-start mb-5'>
						<td className='flex-1'>ID</td>
						<td className='flex-1 text-right'>1</td>
					</tr>
					<tr className='flex  justify-start items-start mb-5'>
						<td className='flex-1'>Contact</td>
						<td className='flex-1 text-right'>
							https://t.me/first_school_nukus_bot
						</td>
					</tr>
					<tr className='flex justify-start items-start mb-5'>
						<td className='flex-1'>Created</td>
						<td className='flex-1 text-right'>23-05-2023 11:05</td>
					</tr>
					<tr>
						<td>
							<button className='text-red-500 font-semibold'>DELETE</button>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	)
}

export default Bot
