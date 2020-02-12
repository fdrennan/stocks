import pusher

pusher_client = pusher.Pusher(
  app_id='945046',
  key='b84802dc42f39193db3a',
  secret='21acd47969c37e97664b',
  cluster='us3',
  ssl=True
)

pusher_client.trigger('my-channel', 'my-event', {'message': 'hello world'})