function Profile(){
  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="sm:flex sm:items-center px-6 py-4">
        <img className="block mx-auto sm:mx-0 sm:flex-shrink-0 h-24 rounded-full" src="profile.png" alt="Profile" />
        <div className="mt-4 text-center sm:mt-0 sm:ml-4 sm:text-left">
          <p className="text-xl leading-tight">Alan Green</p>
          <p className="text-sm leading-tight text-gray-600">Washington, d.c.</p>
          <div className="mt-4">
            <button className="text-sm px-4 py-2 leading-none border rounded text-white bg-green-500 hover:bg-green-700">Follow</button>
            <button className="ml-2 text-sm px-4 py-2 leading-none border rounded text-gray-700 bg-white hover:bg-gray-100">Message</button>
          </div>
        </div>
      </div>
      <div className="px-6 py-4">
        <div className="text-xl leading-tight">About Me</div>
        <div className="mt-2">
          <div><strong>Degree:</strong> MBBS,MD</div>
          <div><strong>Designation:</strong> Gynaecologist</div>
          <div><strong>Email address:</strong> michael@gmail.com</div>
          <div><strong>Mobile:</strong> +202-555-2828</div>
          <div><strong>Address:</strong> 795 Folsom Ave, Suite 600 San Francisco, 94107</div>
          <div><strong>Social:</strong> <a href="https://twitter.com/example" className="text-blue-500">twitter.com/example</a></div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
