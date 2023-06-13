import { useDispatch } from 'react-redux';
import { visibleContact } from 'redux/contactSlice';

import css from '../Filter/Filter.module.css';

export default function Filter() {
    const dispatch = useDispatch();
    const handleFilter = (event)=> {dispatch(visibleContact(event.target.value))}

    return( <label htmlFor="" className={css.label}>Find contact by name
            <input type="text" className={css.input}
                name="filter"
                onChange={handleFilter}/>
            </label>
    )
}














// import PropTypes from 'prop-types';
// import css from '../Filter/Filter.module.css'

// export default function Filter(props){
//     const { value, onChange } = props; 
    // return( <label htmlFor="" className={css.label}>Find contact by name
    //         <input type="text" className={css.input}
    //             value={value}
    //             onChange={onChange}/>
    //         </label>
    // )
// }
          
// Filter.propTypes = {
//     value: PropTypes.string.isRequired,
//     onChange: PropTypes.func.isRequired,
// }