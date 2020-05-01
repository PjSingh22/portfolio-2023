// Start at the 5th ranked film
var currentMovie = 5;


//If clicking previous button
$('.prev').on('click',function() {
  if (currentMovie === 5) {
    currentMovie = 1;
  }else {
    currentMovie += 1;
  }
  console.log(currentMovie);
  // Change movie name and review
  if (currentMovie === 5) {
    $('h2').text("Rank #5 - Thor: Ragnorak");
    $('p').text("Thor Ragnarok provides a brand new character arc for the God of Thunder, bringing light hearted humor to the table, while breaking down everything we used to know about the character. In this movie, Thor becomes less Shakespearean, loses his hammer, and has to find himself as a person, which overall, makes him a more relatable character. Throughout the course of this film, Thor finds himself losing more and more about what made him, him. With that, he must reevaluate who he is. What I enjoy about this arc is that he doesn’t find the answer to that by the end of this movie, but instead, this idea continues to get explored in his future movies, which shows the real impact of the obstacles he has faced. With the first two Thor movies being not so spectacular, rather than being the end of a trilogy, Thor Ragnarok brings a refreshing start to the character, which continues on in his following movies, and really shows us how much more Thor can grow as a person.");
  }
  else if (currentMovie === 4) {
    $('h2').text("Rank #4 - Captain America: The Winter Soldier");
    $('p').text("Captain America The Winter Soldier has been a long time favorite of mine. Prior to this movie, Captain America was depicted as a man out of time, trying to find his way in the new world. In this movie, we really get to see him find his stride. Captain America always believed in serving his army, his country, and following orders. When he finds out that Hydra has taken over Shield, he realizes that governments and agencies can become corrupt, and that being a good person and soldier isn’t about serving and following orders, but instead, doing what you personally think is right. This realization is personified when he meets the Winter Soldier, his best friend Bucky Barnes, someone who is blindly following orders that conflicts with his moral values. Captain America The Winter Soldier is the perfect combination of story, action, and character development.");
  }
  else if (currentMovie === 3) {
    $('h2').text("Rank #3 - Captain America: Civil War");
    $('p').text("Captain America Civil War is a near masterpiece. In this movie, Captain America continues his conflict about doing the right thing and following orders. This conflict is presented when the Sokovia Accords puts the Avengers in disagreement. What I find so intriguing about this movie, is that the writers really make you think about who is right, rather than having one clear hero, and one clear villain. Iron Man isn’t necessarily choosing the wrong side, but is rather doing it for the wrong reasons, as his decision to side with the Sokovia Accords stems from his guilt with killing innocent victims during their past fights as well as losing his girlfriend, Pepper Potts, over his need to be Iron Man. What really makes the fight between Captain America and Iron Man so deep is that the conflict is personal as well, with Iron Man finding out it was the Winter Soldier who killed his parents, and Captain America who kept it a secret. Lastly, rather than having a resolution in the end, the film ends with the Avengers falling apart, which really shows the stakes in this movie, and the impact it had on the characters.");
  }
  else if (currentMovie === 2) {
    $('h2').text("Rank #2 - Avengers: Infinity War");
    $('p').text("I find that Avengers Infinity War brings to the table one of the best narratives in the whole MCU. Up until this point, the Avengers movies have followed a similar blueprint. But with Infinity War, this was Thanos’ movie. This movie was Thanos’ arc, his story, and his mission. Rather than being a pure villain, Thanos is actually very mature, as he has his morals, and is extremely driven towards what he believes in. The Thanos we meet in Infinity War does not aim to slaughter everyone in his path, but instead only does what he needs to do to fulfill his destiny of bringing balance to the universe. The impact of Civil War continues in this movie as the Avengers are still broken up and vulnerable, which ultimately leads to their loss against Thanos. Avengers Infinity War is the perfect combination of action, pace of story telling, and character development.");
  }
  else if (currentMovie === 1) {
    $('h2').text("Rank #1 - Avengers: Endgame");
    $('p').text("The number one spot goes to Avengers Endgame. Although Endgame isn’t the best movie narratively speaking, this movie was definitely for the fans, for those who have watched the same characters for years and have watched them grow into self actualized heroes. Endgame really shows us the impact Infinity War had, and what Thanos’ snap has done to the universe. With that, the stakes feel real, that the heroes are really doing whatever it takes to restore what they once had. The movie itself brings a lot of fanservice, from Captain America wielding the Mjolnir, to him saying “Avengers Assemble”, and to Iron Man wielding the infinity stones. However, the movie also provides great send offs for our beloved heroes and their character arcs. Iron Man, who was always thought to be selfish, to fight for himself, ended his arc by being the one who snapped his fingers and sacrificed himself to save the universe. Captain America, who we’ve always known was willing to give up his life for a greater cause since his first movie, was finally able to take a step back, and live out the rest of his days with the love of his life. Avengers Endgame is the perfect culmination of 22 films, and provides a beautiful ending for the Infinity Saga.");
  }
});



//If clicking next button
$('.next').on('click',function() {
  if (currentMovie === 1) {
    currentMovie = 5;
  }else {
    currentMovie -= 1;
  }
  console.log(currentMovie);
  // Change movie name and review
  if (currentMovie === 5) {
    $('h2').text("Rank #5 - Thor: Ragnorak");
    $('p').text("Thor Ragnarok provides a brand new character arc for the God of Thunder, bringing light hearted humor to the table, while breaking down everything we used to know about the character. In this movie, Thor becomes less Shakespearean, loses his hammer, and has to find himself as a person, which overall, makes him a more relatable character. Throughout the course of this film, Thor finds himself losing more and more about what made him, him. With that, he must reevaluate who he is. What I enjoy about this arc is that he doesn’t find the answer to that by the end of this movie, but instead, this idea continues to get explored in his future movies, which shows the real impact of the obstacles he has faced. With the first two Thor movies being not so spectacular, rather than being the end of a trilogy, Thor Ragnarok brings a refreshing start to the character, which continues on in his following movies, and really shows us how much more Thor can grow as a person.");
  }
  else if (currentMovie === 4) {
    $('h2').text("Rank #4 - Captain America: The Winter Soldier");
    $('p').text("Captain America The Winter Soldier has been a long time favorite of mine. Prior to this movie, Captain America was depicted as a man out of time, trying to find his way in the new world. In this movie, we really get to see him find his stride. Captain America always believed in serving his army, his country, and following orders. When he finds out that Hydra has taken over Shield, he realizes that governments and agencies can become corrupt, and that being a good person and soldier isn’t about serving and following orders, but instead, doing what you personally think is right. This realization is personified when he meets the Winter Soldier, his best friend Bucky Barnes, someone who is blindly following orders that conflicts with his moral values. Captain America The Winter Soldier is the perfect combination of story, action, and character development.");
  }
  else if (currentMovie === 3) {
    $('h2').text("Rank #3 - Captain America: Civil War");
    $('p').text("Captain America Civil War is a near masterpiece. In this movie, Captain America continues his conflict about doing the right thing and following orders. This conflict is presented when the Sokovia Accords puts the Avengers in disagreement. What I find so intriguing about this movie, is that the writers really make you think about who is right, rather than having one clear hero, and one clear villain. Iron Man isn’t necessarily choosing the wrong side, but is rather doing it for the wrong reasons, as his decision to side with the Sokovia Accords stems from his guilt with killing innocent victims during their past fights as well as losing his girlfriend, Pepper Potts, over his need to be Iron Man. What really makes the fight between Captain America and Iron Man so deep is that the conflict is personal as well, with Iron Man finding out it was the Winter Soldier who killed his parents, and Captain America who kept it a secret. Lastly, rather than having a resolution in the end, the film ends with the Avengers falling apart, which really shows the stakes in this movie, and the impact it had on the characters.");
  }
  else if (currentMovie === 2) {
    $('h2').text("Rank #2 - Avengers: Infinity War");
    $('p').text("I find that Avengers Infinity War brings to the table one of the best narratives in the whole MCU. Up until this point, the Avengers movies have followed a similar blueprint. But with Infinity War, this was Thanos’ movie. This movie was Thanos’ arc, his story, and his mission. Rather than being a pure villain, Thanos is actually very mature, as he has his morals, and is extremely driven towards what he believes in. The Thanos we meet in Infinity War does not aim to slaughter everyone in his path, but instead only does what he needs to do to fulfill his destiny of bringing balance to the universe. The impact of Civil War continues in this movie as the Avengers are still broken up and vulnerable, which ultimately leads to their loss against Thanos. Avengers Infinity War is the perfect combination of action, pace of story telling, and character development.");
  }
  else if (currentMovie === 1) {
    $('h2').text("Rank #1 - Avengers: Endgame");
    $('p').text("The number one spot goes to Avengers Endgame. Although Endgame isn’t the best movie narratively speaking, this movie was definitely for the fans, for those who have watched the same characters for years and have watched them grow into self actualized heroes. Endgame really shows us the impact Infinity War had, and what Thanos’ snap has done to the universe. With that, the stakes feel real, that the heroes are really doing whatever it takes to restore what they once had. The movie itself brings a lot of fanservice, from Captain America wielding the Mjolnir, to him saying “Avengers Assemble”, and to Iron Man wielding the infinity stones. However, the movie also provides great send offs for our beloved heroes and their character arcs. Iron Man, who was always thought to be selfish, to fight for himself, ended his arc by being the one who snapped his fingers and sacrificed himself to save the universe. Captain America, who we’ve always known was willing to give up his life for a greater cause since his first movie, was finally able to take a step back, and live out the rest of his days with the love of his life. Avengers Endgame is the perfect culmination of 22 films, and provides a beautiful ending for the Infinity Saga.");
  }
});
