# Avatarin newmw mockup

## Quick Start

### Install

```
yarn
```

### To run the server (backend)

##### Reading json locally as datasource

```
yarn dev
```

## Current Services

### Experience Schedule

#avatarId
#limit (set the numbers of schedule experiences)

```
localhost:4000/experiencesSchedule?avatarId=1&limit=2
```

#### Result

```
{"experiences":[{"id":1,"reservationSpace":5,"reserved":2,"date":{"startTime":"16:15","endTime":"15:30"},"active":true},{"id":2,"reservationSpace":5,"reserved":0,"date":{"startTime":"16:30","endTime":"17:15"},"active":false}]}
```

### Settings

#avatarId

```
localhost:4000/settings?avatarId=1
```
