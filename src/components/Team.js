const people = [
  {
    name: 'Gnaneswar Lopinti',
    role: 'Founder / CEO',
    imageUrl:
      'https://via.placeholder.com/150', // Example image URL
  },
  {
    name: 'Sonika Kommineni',
    role: 'Co-Founder',
    imageUrl:
      'https://via.placeholder.com/150', // Example image URL
  },
  {
    name: 'Sandeep Kalla',
    role: 'Innovation Executive',
    imageUrl:
      'https://via.placeholder.com/150', // Example image URL
  },
  {
    name: 'Preethi G',
    role: 'Research Extension ',
    imageUrl:
      'https://via.placeholder.com/150', // Example image URL
  },
  {
    name: 'Bhanu Prakash Reddy',
    role: 'Engineering Solutions',
    imageUrl:
      'https://via.placeholder.com/150', // Example image URL
  },
  {
    name: 'Mrunalni P',
    role: 'Health Expert',
    imageUrl:
      'https://via.placeholder.com/150', // Example image URL
  },
  // More people...
]

export default function Example() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet our leadership</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            At Hydrosprout, our dedicated team of experts in nutrition, technology, and wellness are united by a shared mission: to empower individuals with personalized solutions for lifelong health and vitality.
          </p>
        </div>
        <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
          {people.map((person) => (
            <li key={person.name}>
              <div className="flex items-center gap-x-6">
                <img className="h-28 w-16 rounded-full" src={person.imageUrl} alt="" />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                  <p className="text-sm font-semibold leading-6 text-indigo-600">{person.role}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
