
const UserDetails = ({userDetails}) => {
    const {id, name,username,email,phone} = userDetails;
    return (
        <div>
            <div>id:{id}</div>
            <div>name:{name}</div>
            <div>username:{username}</div>
            <div>email:{email}</div>
            <div>phone:{phone}</div>
        </div>
    );
};

export {UserDetails};