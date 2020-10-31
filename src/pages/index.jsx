import React, { useState, useEffect } from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import useSound from 'use-sound'

import ratSound1 from '../../static/rat-sound-1.mp3'
import ratSound2 from '../../static/rat-sound-2.mp3'
import ratSound3 from '../../static/rat-sound-3.mp3'
import ratSound4 from '../../static/rat-sound-4.mp3'

const IndexPage = () => {
  const sounds = [
    useSound(ratSound1),
    useSound(ratSound2),
    useSound(ratSound3),
    useSound(ratSound4),
  ]
  const [isPlaying, setIsPlaying] = useState(false)
  const [isPlayingIndex, setIsPlayingIndex] = useState(null)
  useEffect(() => {
    const foundIndex = sounds.findIndex(([_, { isPlaying }]) => isPlaying)
    setIsPlaying(foundIndex >= 0)
    setIsPlayingIndex(foundIndex)
  }, [sounds])

  const handleRatClick = playing => {
    if (playing) {
      sounds[isPlayingIndex][1].stop()
    } else {
      const i = Math.floor(Math.random() * 4)
      sounds[i][0]()
    }
  }

  return (
    <Layout>
      <SEO title="Home to the world's largest collection of free  rat sounds!" />
      <div onClick={() => handleRatClick(isPlaying)}>
        <img
          src={isPlaying ? 'rat-talking.gif' : 'rat-not-talking.png'}
          style={{ maxWidth: 250 }}
          alt="A rat."
        />
      </div>
    </Layout>
  )
}

export default IndexPage
