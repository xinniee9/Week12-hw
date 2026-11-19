const profile = {
  name: 'Kulpriya Khoyayklang',
  studentId: '1680706205',
  section: '227D',
}

function AboutPage() {
  return (
    <div className="card bg-base-100 shadow-md max-w-sm mx-auto p-8 items-center">
      <div className="w-24 h-24 rounded-full bg-secondary text-secondary-content flex items-center justify-center text-4xl font-bold">
        {profile.name.charAt(0)}
      </div>
      <h1 className="text-2xl font-bold mt-4">{profile.name}</h1>
      <dl className="w-full mt-6 text-sm">
        <div className="flex justify-between py-2 border-b border-base-300">
          <dt className="text-gray-500">รหัสนักศึกษา</dt>
          <dd className="font-semibold">{profile.studentId}</dd>
        </div>
        <div className="flex justify-between py-2">
          <dt className="text-gray-500">Section</dt>
          <dd className="font-semibold">{profile.section}</dd>
        </div>
      </dl>
    </div>
  )
}

export default AboutPage