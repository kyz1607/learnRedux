import { connect } from 'react-redux'
import { addNum,delNum } from '../actions'
import Num from '../components/Num'

const mapStateToProps = (state) => {
  return {
    num: state.num
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAddClick: () => {
      setTimeout(()=>{
        dispatch(addNum(1))
      })
      dispatch(addNum())
    },
    onDelClick: () => {
      setTimeout(()=>{
        dispatch(delNum(1))
      },2000)
    }
  }
}

const Nums = connect(
  mapStateToProps,
  mapDispatchToProps
)(Num)

export default Nums