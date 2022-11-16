const singers = [
    {
        fullName: 'Freddie Mercury',
        topRatedSongsScores: [98, 100, 99],
    },
    {
        fullName: 'Janis Joplin',
        topRatedSongsScores: [98, 85, 99],
    },
    {
        fullName: 'Yusuf Islam / Cat Stevens',
        topRatedSongsScores: [100, 89, 99],
    },
]

for (let singer of singers) {
    //Print all students with they grades avarage
    let totalScores = 0
    for (let score of singer.topRatedSongsScores) {
        totalScores += score
    }
    const avgScores = totalScores / singer.topRatedSongsScores.length
    console.log(singer.fullName + ' has average of ' + avgScores)
}
