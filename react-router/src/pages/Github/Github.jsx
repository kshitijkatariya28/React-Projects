import { useLoaderData } from 'react-router-dom'
import React from 'react'

const Github = () => {
  let data = useLoaderData()

  if (!data) {
    return (
      <div className="text-center text-gray-600 text-lg p-6">
        Loading data...
      </div>
    )
  }

  return (
    <div className="max-w-md mx-auto bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 mt-10 mb-10">
      <div className="p-8 text-center">
        <img
          src={data.avatar_url}
          alt="GitHub Avatar"
          className="w-24 h-24 rounded-full mx-auto mb-6 border border-gray-300"
        />

        <h2 className="text-2xl font-semibold text-gray-800 mb-1">
          {data.name || data.login}
        </h2>
        <p className="text-gray-500 text-sm mb-6">{data.bio ?? "No bio available"}</p>

        <div className="flex justify-between px-6 mb-6">
          <div>
            <p className="text-xl font-bold text-gray-700">{data.followers}</p>
            <span className="text-gray-500 text-xs">Followers</span>
          </div>
          <div>
            <p className="text-xl font-bold text-gray-700">{data.following}</p>
            <span className="text-gray-500 text-xs">Following</span>
          </div>
          <div>
            <p className="text-xl font-bold text-gray-700">{data.public_repos}</p>
            <span className="text-gray-500 text-xs">Repos</span>
          </div>
        </div>

        <a
          href={data.html_url}
          target="_blank"
          rel="noreferrer"
          className="inline-block px-5 py-2 bg-gray-800 text-white text-sm rounded-lg hover:bg-gray-700 transition"
        >
          Visit Profile
        </a>
      </div>
    </div>
  )
}

export default Github

export const getGithubInfo = async () => {
  const response = await fetch("https://api.github.com/users/kshitijkatariya28")
  return response.json()
}






