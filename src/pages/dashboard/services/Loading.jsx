import { Dna } from 'react-loader-spinner'

const Loading = () => {
    return (
        <div className='flex justify-center h-[28rem] items-center'>
            <Dna

                visible={true}
                height="80"
                width="80"
                ariaLabel="dna-loading"
                wrapperStyle={{}}
                wrapperClass="dna-wrapper"
            />
        </div>
    )
}

export default Loading