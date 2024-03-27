# Rabbitmq Commands Reference

Simulator: https://tryrabbitmq.com/

`Exchange types`

- Direct Exchange: specify the key to send to a specific queue

- Fanout Exchange: the same message are replied to all queues

- Topic Exchange: like the direct exchange but now you can put rules

`Types`

- FIFO

`Properties`

- Durable: must save after broker restart?
- Auto-delete: remove after broker disconect
- Expiry: Time without any message
- Message TTL: message live time
- Overflow
    - Drop head: remove the last message after queue full
    - Reject publish: reject message after queue full
- Exclusive: only the channel father can access
- Max length: Max quantity messages in a queue

`Dead letter queues`

- Messages that are not ready for any consumers

`Lazy Queues`

- Messages that can be saved in disk when consumers are full

`Confiability`

- Consummer acknowledgement
- Publisher confirm
- Persisted queues