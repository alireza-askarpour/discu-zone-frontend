import { motion } from 'framer-motion'

const roundedVariants = {
  initial: {
    borderRadius: '50%',
    background: '#25252A',
  },
  hover: {
    borderRadius: '30%',
    background: '#5765F2',
    rotate: 0,
  },
}

type Props = {
  onClick: () => any
}

const ServerItem = ({ onClick }: Props) => {
  return (
    <div className="group w-full grid place-items-center mb-2 cursor-pointer relative">
      <motion.div
        onClick={onClick}
        initial="initial"
        whileHover="hover"
        variants={roundedVariants}
        transition={{ duration: 0.15, ease: 'linear' }}
        className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center"
      ></motion.div>
    </div>
  )
}

export default ServerItem
