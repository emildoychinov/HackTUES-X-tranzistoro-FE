<script lang="ts">
  import type { GymDTO } from "./dto/product.dto";
  import Gym from "./Gym.svelte";

  export let gyms: GymDTO[] = [
  {
    id: 1,
    name: "Fitness World",
    logo: "fitnessworld_logo.png",
    location: {
      lon: -74.006,
      lat: 40.7128,
    },
    images: ["gym1_image1.jpg", "gym1_image2.jpg"],
    departments: ["Cardio", "Weights", "Yoga"],
    tags: ["Fitness", "Health", "Exercise"],
    classes: ["Zumba", "Spin", "Body Pump"],
  },
  {
    id: 2,
    name: "Power Gym",
    logo: "powergym_logo.png",
    location: {
      lon: -118.2437,
      lat: 34.0522,
    },
    images: ["gym2_image1.jpg", "gym2_image2.jpg"],
    departments: ["CrossFit", "Boxing", "MMA"],
    tags: ["Strength", "Training", "Fitness"],
    classes: ["CrossFit", "Kickboxing", "Jiu-Jitsu"],
  },
  {
    id: 3,
    name: "Flex Fitness",
    logo: "flexfitness_logo.png",
    location: {
      lon: -73.935242,
      lat: 40.73061,
    },
    images: ["gym3_image1.jpg", "gym3_image2.jpg"],
    departments: ["Strength Training", "Cardio", "Pilates"],
    tags: ["Fitness", "Workout", "Health"],
    classes: ["HIIT", "Pilates", "Boot Camp"],
  },
  // Add more gyms here
  {
    id: 4,
    name: "Muscle Haven",
    logo: "musclehaven_logo.png",
    location: {
      lon: -77.0369,
      lat: 38.9072,
    },
    images: ["gym4_image1.jpg", "gym4_image2.jpg"],
    departments: ["Weightlifting", "Powerlifting", "Functional Training"],
    tags: ["Strength", "Muscle", "Fitness"],
    classes: ["Strength Training", "Functional Fitness", "Circuit Training"],
  },
  {
    id: 5,
    name: "Fit Nation",
    logo: "fitnation_logo.png",
    location: {
      lon: -122.4194,
      lat: 37.7749,
    },
    images: ["gym5_image1.jpg", "gym5_image2.jpg"],
    departments: ["Cardio", "CrossFit", "Spinning"],
    tags: ["Fitness", "Community", "Wellness"],
    classes: ["CrossFit", "Spinning", "Boot Camp"],
  },
  {
    id: 6,
    name: "Iron Temple",
    logo: "irontemple_logo.png",
    location: {
      lon: -0.1276,
      lat: 51.5074,
    },
    images: ["gym6_image1.jpg", "gym6_image2.jpg"],
    departments: ["Bodybuilding", "Strength Training", "Functional Fitness"],
    tags: ["Strength", "Power", "Muscle"],
    classes: ["Bodybuilding", "Functional Fitness", "Strength Training"],
  },
  {
    id: 7,
    name: "Wellness Junction",
    logo: "wellnessjunction_logo.png",
    location: {
      lon: -95.3698,
      lat: 29.7604,
    },
    images: ["gym7_image1.jpg", "gym7_image2.jpg"],
    departments: ["Yoga", "Pilates", "Mindfulness"],
    tags: ["Wellness", "Mind-Body", "Relaxation"],
    classes: ["Yoga", "Pilates", "Meditation"],
  },
  {
    id: 8,
    name: "Peak Performance",
    logo: "peakperformance_logo.png",
    location: {
      lon: -1.8904,
      lat: 52.4862,
    },
    images: ["gym8_image1.jpg", "gym8_image2.jpg"],
    departments: ["Athletic Training", "Sports Conditioning", "Rehabilitation"],
    tags: ["Sports", "Performance", "Athletics"],
    classes: ["Athletic Training", "Sports Conditioning", "Rehabilitation"],
  },
  {
    id: 9,
    name: "Active Fitness",
    logo: "activefitness_logo.png",
    location: {
      lon: 151.2093,
      lat: -33.8688,
    },
    images: ["gym9_image1.jpg", "gym9_image2.jpg"],
    departments: ["Functional Training", "Group Fitness", "Strength Training"],
    tags: ["Active", "Fitness", "Exercise"],
    classes: ["Functional Training", "Group Fitness", "Strength Training"],
  },
  {
    id: 10,
    name: "Health Hub",
    logo: "healthhub_logo.png",
    location: {
      lon: 144.9631,
      lat: -37.8136,
    },
    images: ["gym10_image1.jpg", "gym10_image2.jpg"],
    departments: ["Wellness", "Mind-Body", "Nutrition"],
    tags: ["Health", "Wellness", "Lifestyle"],
    classes: ["Wellness Workshops", "Nutrition Classes", "Mindfulness Meditation"],
  },
  // Additional "Health Hub" entries...
];
</script>

<div>
  <div class="container">
    {#each gyms as gym}
      <Gym gym={gym}/>
    {/each}
  </div>
</div>

<style>
  .container {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    max-height: 80vh; 
    overflow-y: auto; 
  }

</style>