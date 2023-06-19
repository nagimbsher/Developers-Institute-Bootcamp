const Users = (props) => 
{const {name,email,username,id} = props.info
return (
    <div >
        <img src="{https://robohash.org/${id}2?size=150x150}"/>
<h2>{name}</h2>
<h4>{ email}</h4>
<p>{username}</p>
    </div>
)
}
export default Users