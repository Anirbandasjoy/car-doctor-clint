import PropType from 'prop-types'
const Error = ({ children }) => {
    return (
        <div className="flex text-4xl justify-center items-center h-screen">{children}</div>
    )
}

Error.propTypes = {
    children: PropType.node.isRequired
}

export default Error