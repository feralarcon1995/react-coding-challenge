import { ThreeDots } from 'react-loader-spinner'

const Spinner = () => {
    return (
        <div className="flex justify-center items-center min-h-screen max-h-full">
            <ThreeDots
                height="180"
                width="180"
                radius="9"
                color="#1f2937"
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                visible={true}
            />
        </div>
    )
}

export default Spinner