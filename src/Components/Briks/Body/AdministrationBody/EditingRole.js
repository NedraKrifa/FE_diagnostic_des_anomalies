import React, {useState} from 'react'
import { EditTwoTone } from '@ant-design/icons';
import { Row, Col, Select } from 'antd';
import { useDispatch } from "react-redux";
import { updateUserRole } from "../../../../Redux/actions/Users/usersActions"

const { Option } = Select;

export default function EditingRole({role, user}) {
    const dispatch = useDispatch();
    const [edited, setEdited] = useState(false);
    const [value, setValue] = useState(role);

    const handleChange = (value) => {
      setValue(value);
    };

    const updateRole=()=>{
        setEdited(false);
        const body={
            role: value
        }
        dispatch(updateUserRole(user._id,body))
    }
    const cancelRole=()=>{
        setEdited(false);
        setValue(role);
    }
    //console.log(value)

    return edited ? (
      <Row justify="space-between">
        <Col>
          <Select
            defaultValue={role}
            style={{ width: 120 }}
            onChange={handleChange}
          >
            <Option value="Member">Member</Option>
            <Option value="Moderator">Moderator</Option>
            <Option value="Administrator">Administrator</Option>
          </Select>
        </Col>
        <Col>
          <a style={{marginRight:'20px'}} onClick={()=>updateRole()}>save</a>
          <a onClick={() => cancelRole()}>cancel</a>
        </Col>
      </Row>
    ) : (
      <Row justify="space-between">
        <Col>{role}</Col>
        <Col>
          <EditTwoTone onClick={() => setEdited(true)} />
        </Col>
      </Row>
    );
}
